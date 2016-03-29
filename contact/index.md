---
layout: default
title: Contact
description: Contact Jim Taylor
---

# Contact
  
<form role="form" class="form" method="post" action="https://getsimpleform.com/messages?form_api_token=e4b471309ea7aa75d74bc815736d39c3" novalidate="novalidate">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
  <input type='hidden' name='redirect_to' value='http://iamjimtaylor.com/contact/thank-you.html' />
  <!-- all your input fields here.... -->

  <label for="Name" class="control-label"><span class="required">*</span>Name</label>
  <input type="text" value="" name="Name" id="Name" data-val-required="The Name field is required." data-val="true" class="form-control"> 

  <label for="Email" class="control-label"><span class="required">*</span> Email</label>
  <input type="email" value="" name="Email" id="Email" data-val-required="The Email field is required." data-val-email="The Email field is not a valid e-mail address." data-val="true" class="form-control"> 
  
  <label for="Message" class="control-label"><span class="required">*</span> Your Message</label>
  <textarea rows="6" name="Message" id="Message" data-val-required="The Your Message field is required." data-val="true" cols="20" class="form-control"></textarea>
  
  <button type="submit" class="btn btn-primary btn-block">Send Enquiry</button>
</form>