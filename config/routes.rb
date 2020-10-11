Rails.application.routes.draw do
  root to: "home#index"
  # get '/playlists', to: 'home#index'
  # get '/playlists/:id', to: 'home#index'
  get '/discover', to: "home#discover"
  get '/stream', to: "home#stream"
  get '/upload', to: "songs#upload"

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    omniauth_callbacks: 'users/omniauth_callbacks'
  }

  resources :rooms do
    collection do
      post :vonage, to: 'rooms#signal'
    end
    member do
      get :play
    end
  end

  resource :search, only: [:show] do
    collection do
      get :result
    end
  end

  resources :users, only: [:edit, :update, :show] do
    member do
      post :follow
      get :reposts
      get :followers
      get :following
      get :comments
      get :likes
      # get :search
      # get :search_result
    end
    resources :songs, only: [:index]
    resources :playlists, only: [:index]
  end


  resources :songs, only: [:new ,:create, :show, :edit, :update, :destroy]  do
    member do
      post :like
      get :like
      get :add_to_playlist
      post :add_to_playlist
      post :repost
    end
    resources :comments, only: [:create, :destroy]
    member do
      get :share
    end
  end

  resources :playlists, only: [:create, :show, :edit, :update, :destroy] do
    member do
      post :like
      post :repost
    end
  end

  resources :stream, only: [:index]

  resources :library, path: "you", only: [] do
    collection do
      get :library
      get :likes
      get :sets
      get :albums
      get :stations
      get :following
      get :history
    end
  end

  defaults format: :json do
    namespace :api do
      namespace :v1 do
        resources :songs, only: [:index, :show] do
          resources :comments, only: [:index]
        end
        resources :playlists, only: [:index,:show] do
          collection do
            get :library
          end
        end
        resources :library, only:[] do
          collection do
            get :likes
            get :following
          end
        end
        # resources :users, only: [:show] do
        #   member do
        #     get :reposts
        #     get :followers
        #     get :following
        #     get :comments
        #     get :likes
        #   end
        # end
      end
    end
  end

end
