Rails.application.routes.draw do
  resources :sports, only: [:index]
  resources :activities
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # keeps the user logged in from the app component
  get "/me", to: "users#show"
  # Defines the root path route ("/")
  # root "articles#index"
end
