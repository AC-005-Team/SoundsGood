Rails.application.routes.draw do
  root to: "home#index"
  
  devise_for :users, controllers: { 
    sessions: 'users/sessions', 
    registrations: 'users/registrations', 
    omniauth_callbacks: 'users/omniauth_callbacks'
  } 
  
  post '/play_list/:list_id/song/:id/add', to: 'songs#list_toggle', as:'list_toggle'
  get  '/play_list/song/:id/add', to: 'songs#lists', as: 'list_add'

  resources :users, only: [:edit, :update, :show] do
    member do
      post :follow
    end
    resources :songs, shallow:true do
      resources :comments, only: [:create, :destroy]
    end
    resources :playlists, shallow: true
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
