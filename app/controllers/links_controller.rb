class LinksController < ApplicationController
  layout "links_layout"

  # GET /links
  # GET /links.json
  def index
    @links = Link.all

    respond_to do |format|
      format.html # index.html.erb
      format.json  { render :json => @links }
    end
  end

  def redirect
    @link = Link.where(:short => params[:short]).first
    if @link
      @link.requests += 1
      @link.save
      redirect_to @link.long
    else
      render :file => "#{RAILS_ROOT}/public/404.html", :status => 404, :layout => true
    end
  end

  # GET /links/1
  # GET /links/1.json
  def show
    @link = Link.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json  { render :json => @link }
    end
  end

  # GET /links/new
  # GET /links/new.json
  def new
    @link = Link.new
    @link.requests = 0
    respond_to do |format|
      format.html # new.html.erb
      format.json  { render :json => @link }
    end
  end

  # GET /links/1/edit
  def edit
    @link = Link.find(params[:id])
  end

  # POST /links
  # POST /links.json
#  def create
#    @link = Link.new(params[:link])
#
#    respond_to do |format|
#      if @link.save
#        format.html { redirect_to(@link, :notice => 'Link was successfully created.') }
#        format.json  { render :json => @link, :status => :created, :location => @link }
#      else
#        format.html { render :action => "new" }
#        format.json  { render :json => @link.errors, :status => :unprocessable_entity }
#      end
#    end
#  end

  # PUT /links/1
  # PUT /links/1.json
  #def update
  #  @link = Link.find(params[:id])

  #  respond_to do |format|
  #    if @link.update_attributes(params[:link])
  #      format.html { redirect_to(@link, :notice => 'Link was successfully updated.') }
  #      format.json  { head :ok }
  #    else
  #      format.html { render :action => "edit" }
  #      format.json  { render :json => @link.errors, :status => :unprocessable_entity }
  #    end
  #  end
  #end

  # DELETE /links/1
  # DELETE /links/1.json
  #def destroy
  #  @link = Link.find(params[:id])
  #  @link.destroy

  #  respond_to do |format|
  #    format.html { redirect_to(links_url) }
  #    format.json  { head :ok }
  #  end
  #end
end
