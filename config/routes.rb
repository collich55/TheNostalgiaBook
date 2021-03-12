Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :create, :show, :destroy, :update]
    resources :likes, only: [:index, :create, :show, :destroy]
    resources :comments, only: [:index, :create, :show, :destroy, :update]
    resources :friendships, only: [:create, :update, :edit, :destroy, :index, :show]
  end

  root "static_pages#root"
end