import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.setProperties.findRecord('rental', params.rental_id);
    }
});
