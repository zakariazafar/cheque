require 'spec_helper.rb'

feature "Looking up cheques", js: true do
 
  scenario "finding cheques by name" do
    visit '/'
    
     first("a", "Test Name2").click
    
    expect(page).to have_content("560")
    expect(page).to have_no_content("1250")
  end
end