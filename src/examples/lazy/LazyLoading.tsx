import React from 'react';

const Loading = () => <p>Loading...</p>

// const BigComponentLazy = React.lazy(() => import('./BigComponent'));
const BigComponentLazy = React.lazy(() => delayForDemo(import('./BigComponent')));
 
export const LazyLoading = () => {
    const [showPreview, setShowPreview] = React.useState(false);
    return (
      <>
        <label>
          <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
          Show preview
        </label>
        <hr />
        {showPreview && (
          <React.Suspense fallback={<Loading />}>
            <BigComponentLazy />
          </React.Suspense>
        )}
      </>
    );   
}

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }