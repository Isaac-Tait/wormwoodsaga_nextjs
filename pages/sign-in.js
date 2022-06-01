import { addMember } from '../../lib/ghost';

const SignIn = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <button type="submit" onSubmit={addMember}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
