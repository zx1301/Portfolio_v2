Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/pages/:page" => "pages#show"
  root "pages#show", page: "home" #first, call pages' show function
  
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
  
end
