Rails.application.routes.draw do
  root to: "home#index"
  
  devise_for :users, controllers: { 
    sessions: 'users/sessions', 
    registrations: 'users/registrations', 
    omniauth_callbacks: 'users/omniauth_callbacks'
  } 
  
  resources :songs, only: [:create, :index, :new, :destroy, :show]

  resources :users, only: [:show] do
    member do
      post :follow
    end
  end

  get  '/user/profile', to:'users#profile', as:'user_profile'
  get  '/user/:id/edit', to:'users#edit', as:'user_edit'
  post '/user/:id/update', to:'users#update', as:'user_update'
  get  '/user/play_list', to:'users#play_list', as:'play_list'
  get  '/user/:id/play_list/new', to:'users#new_play_list', as:'new_play_list'
  post '/user/:id/play_list/create', to:'users#create_play_list', as:'create_play_list'
  post '/play_list/:list_id/song/:id/add', to: 'songs#list_toggle', as:'list_toggle'
  get  '/play_list/song/:id/add', to: 'songs#lists', as: 'list_add'
  
end
