Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :media, only: [:index, :create, :destroy, :update, :show]
    resources :comments, only: [:index, :create, :destroy, :update, :show]
  end
  resources :users, only: [:new, :create, :update, :show, :index]

  resources :follows, only: [:index, :create, :destroy]
  resources :likes, only: [:index, :create, :destroy]
  resource :session, only: [:new, :create, :destroy] do
    member do
      post :guest
    end
  end
end
