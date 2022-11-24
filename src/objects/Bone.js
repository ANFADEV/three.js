import { Object3D } from '../core/Object3D.js';

class Bone extends Object3D {

	constructor() {

		Object.setPrototypeOf( this, Object3D );

		super();

		this.isBone = true;

		this.type = 'Bone';

	}

}

export { Bone };
