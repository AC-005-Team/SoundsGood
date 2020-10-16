class ImageUploader < ApplicationUploader
  plugin :default_url
  
  Attacher.default_url do |**options|
    "/img/#{name}/default.png"
  end
  Attacher.validate do
    validate_mime_type %w[image/jpeg image/png image/webp], message: "must be image/jpeg image/png image/webp"
  end
end
