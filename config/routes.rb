Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :create, :show, :destroy, :update, :new, :edit]
    resources :friendships, only: [:create, :new, :update, :edit, :destroy, :index, :show]
  end

  root "static_pages#root"
end