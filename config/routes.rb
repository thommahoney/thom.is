ThomIs::Application.routes.draw do
  resources :links
  resources :tasks
  resources :people



  match '*short' => "links#redirect"
  root :to => 'home#index'
end
