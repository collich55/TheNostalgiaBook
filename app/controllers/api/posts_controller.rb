class Api::PostsController < ApplicationController
    before_action :require_logged_in

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def index
        @posts = Post.all
        render :index
    end

    def destroy
        @post = Post.find(params[:id])

        @post.destroy
    end

    def update
        @post = Post.find(params[:id])
    if @post.update!(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

    


    private

    def post_params
        params.require(:post).permit(:body, :author_id, :other_user_id)
    end
end
