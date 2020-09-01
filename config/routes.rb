Rails.application.routes.draw do
  root to: "home#index"
  
  devise_for :users, controllers: { 
    sessions: 'users/sessions', 
    registrations: 'users/registrations', 
    omniauth_callbacks: 'users/omniauth_callbacks'
  } 
  
  resources :songs, only: [:create, :index, :new, :destroy, :show]

  get  '/user/profile', to:'users#profile', as:'user_profile'
  get  '/user/:id/edit', to:'users#edit', as:'user_edit'
  post '/user/:id/update', to:'users#update', as:'user_update'
  get  '/user/play_list', to:'users#play_list', as:'play_list'
  get  '/user/:id/play_list/new', to:'users#new_play_list', as:'new_play_list'
  post '/user/:id/play_list/create', to:'users#create_play_list', as:'create_play_list'
end
