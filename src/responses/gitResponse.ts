'use strict';

module.exports = class RepositorioResponse {
    static to(obj: any) {
        return {
            name: (typeof obj.full_name !== 'undefined') ? obj.full_name : null,
            description: (typeof obj.description !== 'undefined') ? obj.description : null,
            image: (typeof obj.owner.avatar_url !== 'undefined') ? obj.owner.avatar_url : null,
            date: (typeof obj.created_at !== 'undefined') ? obj.created_at : null
        };
    }
}