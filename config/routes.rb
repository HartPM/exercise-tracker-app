Rails.application.routes.draw do
  resources :sports, only: [:index]
  resources :activities
  resources :users #do
  #   resources :activities, only: [:index]
  # end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # keeps the user logged in from the app component
  get "/me", to: "users#show"
  get "/longest_runs", to: "activities#longest_runs"
  get "/longest_rides", to: "activities#longest_rides"
  # Defines the root path route ("/")
  # root "articles#index"
end
