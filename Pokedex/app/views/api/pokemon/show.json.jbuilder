json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
  json.image_url asset_path(@pokemon.image_url)
end

json.items do
  @pokemon.item_ids.each do |item_id|
    json.set! item_id do
      json.extract! @items[item_id], :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end 
end
