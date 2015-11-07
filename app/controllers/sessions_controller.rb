class SessionsController < ApplicationController

  skip_before_action :require_log_in!, only: [:new, :create, :guest]

  def new
  end

  def create
    user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if user
      log_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password."]
      redirect_to new_session_url
    end
  end

  def destroy
    sign_out
    render json: {}
  end

  def guest
    user = User.guest
    log_in(user)
    redirect_to root_url
  end

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end

end
