/**
 *
 * WordPress Dependencies
 *
 */
 import { store as editPostStore } from '@wordpress/edit-post';
 import { useLayoutEffect } from '@wordpress/element';
 
 function CoreStoresProvider( props ) {
     useLayoutEffect( () => {
         editPostStore.instantiate();
     }, [] );
 
     return props.children;
 }
 
 export default CoreStoresProvider;