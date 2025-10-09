// same product array so we can map id -> name
    const products = [
      { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
      { id: "fc-2050", name: "power laces", averagerating: 4.7 },
      { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
      { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
      { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    function getProductNameById(id){
      const p = products.find(x => x.id === id);
      return p ? p.name : id;
    }

    document.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);

      if (params.has('product')) {
        let key = 'reviewCount';
        let prev = parseInt(localStorage.getItem(key) || '0', 10);
        let next = prev + 1;
        localStorage.setItem(key, String(next));
        document.getElementById('count').textContent = next;
      } else {
        let key = 'reviewCount';
        let curr = parseInt(localStorage.getItem(key) || '0', 10);
        document.getElementById('count').textContent = curr;
        document.getElementById('message').textContent = 'No form data received.';
      }

      const productId = params.get('product') || '';
      document.getElementById('outProduct').textContent = getProductNameById(productId);
      document.getElementById('outRating').textContent = (params.get('rating') || '—') + ' / 5';
      document.getElementById('outDate').textContent = params.get('installDate') || '—';


      let features = params.getAll('features');
      document.getElementById('outFeatures').textContent = features.length ? features.join(', ') : 'None selected';


      document.getElementById('outText').textContent = params.get('reviewText') || '—';
      document.getElementById('outName').textContent = params.get('userName') || 'Anonymous';
    });