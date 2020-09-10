Rails.application.routes.draw do
  root to: "home#index"
  
  devise_for :users, controllers: { 
    sessions: 'users/sessions', 
    registrations: 'users/registrations', 
    omniauth_callbacks: 'users/omniauth_callbacks'
  } 
  

  resources :users, only: [:edit, :update, :show] do
    member do
      post :follow
    end
    resources :songs, shallow: true do
      member do 
        post :like
        post :add_to_playlist
      end
      resources :comments, only: [:create, :destroy]
    end
    resources :playlists, shallow: true do
      member do 
        post :like
      end  
    end
  end

  
  resources :discover, only: [:index]

  resources :you, only: [:index] do
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
end
