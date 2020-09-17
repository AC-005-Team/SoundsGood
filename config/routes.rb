Rails.application.routes.draw do
  root to: "home#index"
  get '/discover', to: "home#discover"
  get '/stream', to: "home#stream"

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    omniauth_callbacks: 'users/omniauth_callbacks'
  } 
  

  resources :users, only: [:edit, :update, :show] do
    member do
      post :follow
      get :reposts
      get :followers
      get :following
      get :comments
      get :likes
      get :search
      get :search_result
    end
    resources :songs, shallow: true do
      member do 
        post :like
        post :add_to_playlist
      end
      resources :comments, only: [:create, :destroy]
      member do
        get :share
      end
    end
    resources :playlists, shallow: true do
      member do 
        post :like
      end  
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
        resources :songs, only: [:index, :show]
        resources :playlists, only: [:show]
      end
    end
  end
end
