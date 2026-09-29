import React from 'react';
import { useForm } from "react-hook-form"; 

const HookForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch 
    } = useForm();

    // Store the value of the password field to compare it later
    const passwordValue = watch("password");

    const submit = (data) => {
        console.log("Form Submitted Successfully:", data);
    };

    return (
        <div style={{ padding: "20px" }}>
            <form onSubmit={handleSubmit(submit)}>
                
                {/* NAME FIELD */}
                <div>
                    <label>Name: </label>
                    <input {...register('name', { required: "Name is Required" })} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>

                {/* EMAIL FIELD */}
                <div style={{ marginTop: "10px" }}>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        {...register('email', { 
                            required: "Email is Required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format"
                            }
                        })} 
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>

                {/* PASSWORD FIELD */}
                <div style={{ marginTop: "10px" }}>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        {...register('password', { 
                            required: "Password is Required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })} 
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </div>

                {/* CONFIRM PASSWORD FIELD */}
                <div style={{ marginTop: "10px" }}>
                    <label>Confirm Password: </label>
                    <input 
                        type="password" 
                        {...register('confirmPassword', { 
                            required: "Please confirm your password",
                            validate: (value) => value === passwordValue || "Passwords do not match"
                        })} 
                    />
                    {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
                </div>

                {/* SUBMIT BUTTON */}
                <button type="submit" style={{ marginTop: "15px" }}>Submit</button>

            </form>
        </div>
    );
};



export default HookForm