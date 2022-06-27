Rails.application.routes.draw do
  # namespace :api do
    resources :sports, only: [:index]
    resources :activities
    resources :users, except: [:delete]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    # keeps the user logged in from the app component
    get "/me", to: "users#show"
    
    get "/longest_runs", to: "activities#longest_runs"
    get "/longest_rides", to: "activities#longest_rides"
    get '/hello', to: 'application#hello_world'
  # end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
