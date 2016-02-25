require 'spec_helper.rb'

feature "Looking up cheques", js: true do
 
  scenario "finding cheques by name" do
    visit '/'
    
    # first("a", "Test Name2").click
     click_link('Test Name2', match: :first)
    # click_to find("a", :text => "Test Name2")
    #first(find("a", :text => "Test Name2")).click
    expect(page).to have_content("560")
    expect(page).to have_no_content("900")
  end
end