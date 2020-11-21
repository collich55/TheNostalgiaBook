Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :destroy, :update, :new, :edit]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :show, :destroy, :update, :new, :edit]
  end

  root "static_pages#root"
end