module SongsHelper

  def playlists_song?(song)
    song.playlists.count > 0 && song.playlists
  end
  
  def display_tag_list(tags)
    result = ""
    tags.map(&:name).each do |name|
      result << "<button type='button' class='btn btn-outline-success'>#{name}</button> "
    end
    result
  end

  def time_diff(start_time, end_time)
    seconds_diff = (start_time.to_i - end_time.to_i).abs

    if seconds_diff < 60
      seconds_diff.to_s + "seconds ago"
    elsif seconds_diff < 3600
      if (seconds_diff / 60) > 1
        (seconds_diff / 60).to_s + "minutes ago" 
      else
        (seconds_diff / 60).to_s + "minute ago" 
      end
    elsif seconds_diff < 86400
      if (seconds_diff / 3600) > 1
        (seconds_diff / 3600).to_s + "hours ago"
      else
        (seconds_diff / 3600).to_s + "hour ago"
      end
    else
      if (seconds_diff / 86400) > 1
        (seconds_diff / 86400).to_s + "days ago"
      else
        (seconds_diff / 86400).to_s + "day ago"
      end
    end



    # case seconds_diff
    # when 86400 
    #   (seconds_diff / 86400).to_s + "days"
    # when 3600 .. 86400
    #   (seconds_diff / 3600).to_s + "hours" 
    # when 60 .. 3600
    #   (seconds_diff / 60).to_s + "minutes" 
    # else
    #   seconds_diff.to_s + "seconds"
    # end
    # hours = seconds_diff / 3600
    # seconds_diff -= hours * 3600
  
    # minutes = seconds_diff / 60
    # seconds_diff -= minutes * 60
  
    # seconds = seconds_diff
  
    # "#{hours.to_s.rjust(2, '0')}:#{minutes.to_s.rjust(2, '0')}:#{seconds.to_s.rjust(2, '0')}"
    # or, as hagello suggested in the comments:
    # '%02d:%02d:%02d' % [hours, minutes, seconds]
  end

end