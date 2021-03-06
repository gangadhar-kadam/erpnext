import webnotes

def execute():
	webnotes.reload_doc("core", "doctype", "event")

	webnotes.conn.sql("""update tabEvent set subject=description""")
		
	webnotes.conn.sql("""update tabEvent set description = concat(description, "\n", notes)
		where ifnull(notes,"") != "" """)
		
	webnotes.conn.sql("""update tabEvent set starts_on = timestamp(event_date, event_hour)""")
	
	webnotes.conn.sql("""update tabEvent set ends_on = timestampadd(hour, 1, starts_on)""")	
	
