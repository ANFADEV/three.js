import { Object3D } from '../core/Object3D.js';

class Group extends Object3D {

	constructor() {

		Object.setPrototypeOf( this, Object3D );

		super();

		this.isGroup = true;

		this.type = 'Group';

	}

}

export { Group };
