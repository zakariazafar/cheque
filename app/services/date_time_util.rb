class DateTimeUtil
def self.date_in_timezone(timezone=nil)
    timezone = timezone.nil? ? 'Australia/Sydney' : timezone
    date = Time.current.in_time_zone(timezone).strftime("%Y-%m-%d")
    return date
 end
end