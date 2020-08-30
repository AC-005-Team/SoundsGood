Rails.application.routes.draw do
  root to: "home#index"
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations', omniauthcallbacks: 'users/omniauthcallbacks'}
  
  resources :songs, only: [:create, :index, :new, :destroy, :show]

  get '/user/profile', to:'home#profile', as:'user_profile'
  get '/user/:id/edit', to:'home#edit', as:'user_edit'
  post'/user/:id/update', to:'home#update', as:'user_update'
end
