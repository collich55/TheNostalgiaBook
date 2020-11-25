class Api::PostsController < ApplicationController
    before_action :require_logged_in

    def create
        # current_user
        @post = current_user.posts.new(post_params)
        
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: :unprocessable_entity
        end
    end

    def index
        @posts = Post.all
        render :index
    end

    


    private

    def post_params
        params.require(:post).permit(:body)
    end
end
