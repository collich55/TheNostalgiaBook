Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :destroy, :update, :new, :edit]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end