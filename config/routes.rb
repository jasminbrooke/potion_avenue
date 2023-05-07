Rails.application.routes.draw do
  resources :customers, only: %i[show index update]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # resources :potion_materials
  resources :materials, only: %i[show index]
  resources :potions, only: %i[show index create update destroy] #do I need this?
  resources :users, only: %i[show create update destroy] do
    resources :potions, only: %i[create update destroy]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
