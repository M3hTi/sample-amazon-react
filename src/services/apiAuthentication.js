import supabase from "./supaBaseClient";

export async function signup({ email, password, name }) {
  try {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName: name,
        },
      },
    });

    if (error)
      throw new Error(
        `You couldn't Signup at this moment!, Error: ${error.message}`,
      );

    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function login({ email, password }) {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error)
      throw new Error(
        `we couldn't login into your account!, Error: ${error.message}`,
      );

    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const { data: session, error: errorSession } =
      await supabase.auth.getSession();

    if (errorSession)
      throw new Error(
        `We can't retrieve session!!, error: ${errorSession.message}`,
      );

    if (!session.session) throw new Error("we don't have session yet!");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
