<script>
    export let header;
    export let data = [];
  
    let dat = data;
  </script>
  
  <div class="flex flex-col w-full">
      <div class="flex w-full border-b ">
          <span class="text-xl font-semibold">{header}</span>
      </div>
      <div class="flex flex-wrap mt-4 -mx-2">
          {#each dat as e (e.id)}
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4" key={e.id}>
              <div class="bg-white rounded-lg shadow-md p-4">
                  <div class="text-lg font-semibold mb-2">{e.name.toUpperCase()}</div>
                  {#if e.desc}
                  <div class="text-sm text-gray-600 mb-2">({e.desc})</div>
                  {/if}
                  <div class="text-xl text-black">{e.num}</div>
              </div>
          </div>
          {/each}
      </div>
  </div>
  
  <style>
      /* Add any additional styles here */
  </style>
  