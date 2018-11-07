Rails.application.routes.draw do
  get 'cart/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root    'store#main', as: 'store'
  get     'index'       => 'store#index', as: 'index'
  get     'sign_up'     => 'customers#new', as: 'sign_up'
  get     'sign_in'     => 'sessions#new', as: 'sign_in'
  get     'sign_out'    => 'sessions#destroy'
  get     'cart'        => 'cart#index'
  #post    'cart/create'        => 'cart#create'
  post    'login'       => 'sessions#create'
  post    'register'    => 'customers#create'
  get  'cart/create/' => 'carts#create'

  resources :customer
end
