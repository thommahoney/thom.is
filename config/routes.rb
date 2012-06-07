ThomIs::Application.routes.draw do
  resources :tasks
  resources :people
  resource :session

  resources :links

  match '/login' => 'sessions#new', :as => 'login'
  match '/logout' => 'sessions#destroy', :as => 'logout'
  match '/auth' => 'sessions#credentials'

  match '*short' => "links#redirect"

  root :to => 'home#index'
end
