class Api::CommentsController < ApplicationController
    before_action :require_logged_in

    def create

        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def index
        @comments = Comment.all
        render :index
    end


     def destroy
        @comment = Comment.find(params[:id])

        @comment.destroy
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update!(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    


    private

    def comment_params
        params.require(:comment).permit(:body, :commenter_id, :post_id)
    end
end
