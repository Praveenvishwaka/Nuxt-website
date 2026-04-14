// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://dev.visualwebsiteoptimizer.com' }
      ],
      script: [
        {
          type: 'text/javascript',
          id: 'vwoCode',
          innerHTML: `const params = new URLSearchParams(window.location.search);
     const accId = parseInt(params.get("id"));
     const accountId = accId || 1055484;
     console.log("Account-Id ->", accountId);
     window._vwo_code || (function() {        
    var account_id = accountId,
        version = 3.0,
        settings_tolerance = 2000,
        hide_element = 'body',
        hide_element_style =
        'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important';
    /* DO NOT EDIT BELOW THIS LINE */
    var t=window,n=document;if(-1<n.URL.indexOf('__vwo_disable__')||t._vwo_code)return;var i=!1,o=n.currentScript,e={sT:settings_tolerance,hES:hide_element_style,hE:hide_element};try{e=Object.assign(JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config')),e)}catch(e){}var code={nonce:o.nonce,settings_tolerance:function(){return e.sT},hide_element:function(){return performance.getEntriesByName('first-contentful-paint')[0]?'':e.hE},hide_element_style:function(){return'{'+e.hES+'}'},getVersion:function(){return version},finish:function(){var e;!i&&(i=!0,e=n.getElementById('_vis_opt_path_hides'))&&e.parentNode.removeChild(e)},finished:function(){return i},addScript:function(e){var t=n.createElement('script');t.src=e,o.nonce&&t.setAttribute('nonce',o.nonce),t.fetchPriority='high',n.head.appendChild(t)},init:function(){t._vwo_settings_timer=setTimeout(function(){code.finish()},this.settings_tolerance());var e=n.createElement('style');e.id='_vis_opt_path_hides',o.nonce&&e.setAttribute('nonce',o.nonce),e.textContent=this.hide_element()+this.hide_element_style(),n.head.appendChild(e),this.addScript('https://dev.visualwebsiteoptimizer.com/tag/'+account_id+'.js')}};t._vwo_code=code;code.init();})();`
        }
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [],
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  }
})
