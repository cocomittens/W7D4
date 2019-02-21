json.array! @gifts do |gift|
  json.extract! gift, :id, :title, :description
end
