# ERPNext - web based ERP (http://erpnext.com)
# Copyright (C) 2012 Web Notes Technologies Pvt Ltd
# 
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.


from __future__ import unicode_literals
import unittest
import webnotes

class TestJournalVoucher(unittest.TestCase):
	def test_journal_voucher_with_against_jv(self):
		jv_invoice = webnotes.bean(copy=test_records[2])
		jv_invoice.insert()
		jv_invoice.submit()
		
		self.assertTrue(not webnotes.conn.sql("""select name from `tabJournal Voucher Detail`
			where against_jv=%s""", jv_invoice.doc.name))
		
		jv_payment = webnotes.bean(copy=test_records[0])
		jv_payment.doclist[1].against_jv = jv_invoice.doc.name
		jv_payment.insert()
		jv_payment.submit()
		
		self.assertTrue(webnotes.conn.sql("""select name from `tabJournal Voucher Detail`
			where against_jv=%s""", jv_invoice.doc.name))
			
		self.assertTrue(webnotes.conn.sql("""select name from `tabJournal Voucher Detail`
			where against_jv=%s and credit=400""", jv_invoice.doc.name))
		
		# cancel jv_invoice
		jv_invoice.cancel()
		
		self.assertTrue(not webnotes.conn.sql("""select name from `tabJournal Voucher Detail`
			where against_jv=%s""", jv_invoice.doc.name))

test_records = [
	[{
		"company": "_Test Company", 
		"doctype": "Journal Voucher", 
		"fiscal_year": "_Test Fiscal Year 2013", 
		"naming_series": "_T-Journal Voucher-",
		"posting_date": "2013-02-14", 
		"user_remark": "test",
		"voucher_type": "Bank Voucher",
		"cheque_no": "33",
		"cheque_date": "2013-02-14"
	}, 
	{
		"account": "_Test Customer - _TC", 
		"doctype": "Journal Voucher Detail", 
		"credit": 400.0,
		"debit": 0.0,
		"parentfield": "entries"
	}, 
	{
		"account": "_Test Account Bank Account - _TC", 
		"doctype": "Journal Voucher Detail", 
		"debit": 400.0,
		"credit": 0.0,
		"parentfield": "entries"
	}],
	[{
		"company": "_Test Company", 
		"doctype": "Journal Voucher", 
		"fiscal_year": "_Test Fiscal Year 2013", 
		"naming_series": "_T-Journal Voucher-",
		"posting_date": "2013-02-14", 
		"user_remark": "test",
		"voucher_type": "Bank Voucher",
		"cheque_no": "33",
		"cheque_date": "2013-02-14"
	}, 
	{
		"account": "_Test Supplier - _TC", 
		"doctype": "Journal Voucher Detail", 
		"credit": 0.0,
		"debit": 400.0,
		"parentfield": "entries"
	}, 
	{
		"account": "_Test Account Bank Account - _TC", 
		"doctype": "Journal Voucher Detail", 
		"debit": 0.0,
		"credit": 400.0,
		"parentfield": "entries"
	}],
	[{
		"company": "_Test Company", 
		"doctype": "Journal Voucher", 
		"fiscal_year": "_Test Fiscal Year 2013", 
		"naming_series": "_T-Journal Voucher-",
		"posting_date": "2013-02-14", 
		"user_remark": "test",
		"voucher_type": "Bank Voucher",
		"cheque_no": "33",
		"cheque_date": "2013-02-14"
	}, 
	{
		"account": "_Test Customer - _TC", 
		"doctype": "Journal Voucher Detail", 
		"credit": 0.0,
		"debit": 400.0,
		"parentfield": "entries"
	}, 
	{
		"account": "Sales - _TC", 
		"doctype": "Journal Voucher Detail", 
		"credit": 400.0,
		"debit": 0.0,
		"parentfield": "entries",
		"cost_center": "_Test Cost Center - _TC"
	}],
]






# 
# 
# import webnotes.model
# from webnotes.utils import nowdate, flt, add_days
# from accounts.utils import get_fiscal_year, get_balance_on
# 
# company = webnotes.conn.get_default("company")
# abbr = webnotes.conn.get_value("Company", company, "abbr")
# 
# data = {
# 	"expense_account": {
# 		"doctype": "Account",
# 		"account_name": "Test Expense",
# 		"parent_account": "Direct Expenses - %s" % abbr,
# 		"company": company,
# 		"debit_or_credit": "Debit",
# 		"is_pl_account": "Yes",
# 		"group_or_ledger": "Ledger"
# 	},
# 	"supplier_account": {
# 		"doctype": "Account",
# 		"account_name": "Test Supplier",
# 		"parent_account": "Accounts Payable - %s" % abbr,
# 		"company": company,
# 		"debit_or_credit": "Credit",
# 		"is_pl_account": "No",
# 		"group_or_ledger": "Ledger"
# 	},
# 	"test_cost_center": {
# 		"doctype": "Cost Center",
# 		"cost_center_name": "Test Cost Center",
# 		"parent_cost_center": "Root - %s" % abbr,
# 		"company_name": company,
# 		"group_or_ledger": "Ledger",
# 		"company_abbr": abbr
# 	},
# 	"journal_voucher": [
# 		{
# 			"doctype": "Journal Voucher",
# 			"voucher_type": "Journal Entry",
# 			"naming_series": "JV",
# 			"posting_date": nowdate(),
# 			"remark": "Test Journal Voucher",
# 			"fiscal_year": get_fiscal_year(nowdate())[0],
# 			"company": company
# 		},
# 		{
# 			"doctype": "Journal Voucher Detail",
# 			"parentfield": "entries",
# 			"account": "Test Expense - %s" % abbr,
# 			"debit": 5000,
# 			"cost_center": "Test Cost Center - %s" % abbr,
# 		},
# 		{
# 			"doctype": "Journal Voucher Detail",
# 			"parentfield": "entries",
# 			"account": "Test Supplier - %s" % abbr,
# 			"credit": 5000,
# 		},
# 	]
# }
# 
# def get_name(s):
# 	return s + " - " + abbr
# 
# class TestJournalVoucher(unittest.TestCase):
# 	def setUp(self):
# 		webnotes.conn.begin()
# 		
# 		# create a dummy account
# 		webnotes.model.insert([data["expense_account"]])
# 		webnotes.model.insert([data["supplier_account"]])
# 		webnotes.model.insert([data["test_cost_center"]])
# 		
# 	def tearDown(self):
# 		webnotes.conn.rollback()
# 		
# 	def test_save_journal_voucher(self):
# 		expense_ac_balance = get_balance_on(get_name("Test Expense"), nowdate())
# 		supplier_ac_balance = get_balance_on(get_name("Test Supplier"), nowdate())
# 		
# 		dl = webnotes.model.insert(data["journal_voucher"])
# 		dl.submit()
# 		dl.load_from_db()
# 		
# 		# test submitted jv
# 		self.assertTrue(webnotes.conn.exists("Journal Voucher", dl.doclist[0].name))
# 		for d in dl.doclist[1:]:
# 			self.assertEquals(webnotes.conn.get_value("Journal Voucher Detail",
# 				d.name, "parent"), dl.doclist[0].name)
# 		
# 		# test gl entry
# 		gle = webnotes.conn.sql("""select account, debit, credit
# 			from `tabGL Entry` where voucher_no = %s order by account""",
# 			 dl.doclist[0].name)
# 		
# 		self.assertEquals((gle[0][0], flt(gle[0][1]), flt(gle[0][2])), 
# 			('Test Expense - %s' % abbr, 5000.0, 0.0))
# 		self.assertEquals((gle[1][0], flt(gle[1][1]), flt(gle[1][2])), 
# 			('Test Supplier - %s' % abbr, 0.0, 5000.0))
# 	
# 		# check balance as on today
# 		self.assertEqual(get_balance_on(get_name("Test Expense"), nowdate()),
# 			expense_ac_balance + 5000)
# 		self.assertEqual(get_balance_on(get_name("Test Supplier"), nowdate()),
# 			supplier_ac_balance + 5000)
# 			
# 		# check previous balance
# 		self.assertEqual(get_balance_on(get_name("Test Expense"), add_days(nowdate(), -1)), 0)