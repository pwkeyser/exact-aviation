<template>
  <div id="page-wrap">
    <div id="contact-area">
      <form method="post" action="contactengine.php">
        <label for="Name">Name:</label>
        <input id="Name" type="text" name="Name" />

        <label for="Email">Email:</label>
        <input id="Email" type="text" name="Email" />

        <label for="Message">Message:</label><br />
        <textarea id="Message" name="Message" rows="20" cols="20" />

        <input
          type="submit"
          name="submit"
          value="Submit"
          class="submit-button"
        />
      </form>

      <div style="clear: both;" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/*
p {
  font-size: 1.3em;
  margin-bottom: 15px;
} */

#page-wrap {
  /* background: white; 
  width: 660px;
  padding: 20px 50px 20px 50px;
  min-height: 500px;
  height: auto !important;
  height: 500px;
  */
  margin: 20px auto;
  border-radius: 5px;
}

#contact-area {
  width: 600px;
  margin-top: 0;
}

#contact-area input,
#contact-area textarea {
  padding: 5px;
  width: 471px;
  font-family: Helvetica, sans-serif;
  font-size: 1.1em;
  margin: 0px 0px 10px 0px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

#contact-area textarea {
  height: 90px;
}

#contact-area textarea:focus,
#contact-area input:focus {
  border: 2px solid #900;
}

#contact-area input.submit-button {
  width: 80px;
  float: right;
  border-radius: 5px;
  margin-right: 33px;
}

label {
  float: left;
  text-align: right;
  margin-right: 15px;
  width: 80px;
  padding-top: 5px;
  font-size: 1.2em;
}
</style>
