ThomIs::Application.routes.draw do
  resources :links



  match '*short' => "links#redirect"
  root :to => 'home#index'
end
