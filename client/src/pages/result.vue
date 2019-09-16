<template>
  <h1>Summary Sheet</h1>
  <div id="q-app">
    <div class="q-pa-md row items-start q-gutter-md">

      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
            <div class="text-h6">Skills Matched</div>
        </q-card-section>

        <q-separator dark inset></q-separator>

        <q-card-section>
          <li v-for="item in Tagsmatched">
          <div id="q-app2">
            <div class="q-pa-md q-gutter-md">
              <q-btn color="teal" size="sm" label="{{item}}">
              </q-btn>
            </div>
          </div>
          </li>
        </q-card-section>

      </q-card>



      <q-card dark bordered class="bg-grey-9 my-card">
        <q-card-section>
          <div class="text-h6">Skills Not Matched</div>
        </q-card-section>
        <q-separator dark inset></q-separator>
        <q-card-section>
          <li v-for="item in TagsNotMatched">
            <div id="q-app3">
              <div class="q-pa-md q-gutter-md">
                <q-btn color="teal" size="sm" label="{{item}}">
                </q-btn>
              </div>
            </div>
          </li>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "result",
        result: diffTags(),
        Tagsmatched: result.matched,
        TagsNotMatched: result.unmatch,
    }
    new Vue({
        el: '#q-app',
    })
    new Vue({
        el: '#q-app2',
    })

    new Vue({
        el: '#q-app3',
    })
</script>
<style scoped>
  .my-card {
    width: 100%;
    max-width: 250px;
  }


</style>
