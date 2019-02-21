json.array! @parties do |party|
  json.extract! party, :id, :name, :location 
  json.guests party.guests do |guest|
    json.extract! guest, :id, :name, :age
  end
end 