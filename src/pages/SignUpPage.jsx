import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';
import { Loader2 } from 'lucide-react';

const SignUpPage = () => {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors, isSubmitting } 
  } = useForm({
    mode: "onChange",
    defaultValues: {
      role_id: "3"
    }
  });

  const [roles] = useState([
    { id: 3, name: "Customer", code: "customer" },
    { id: 2, name: "Store", code: "store" },
    { id: 1, name: "Admin", code: "admin" }
  ]);

  const navigate = useNavigate();
  
  const password = watch("password");
  const selectedRoleId = watch("role_id");

  const onSubmit = (data) => {
    let payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id
    };

    const selectedRoleObj = roles.find(r => String(r.id) === String(data.role_id));
    
    if (selectedRoleObj?.code === 'store') {
      payload.store = {
        name: data.store_name,
        phone: data.store_phone,
        tax_no: data.store_tax_no,
        bank_account: data.store_bank_account
      };
    }

    axiosInstance.post('/signup', payload)
      .then(async () => {
        try {
            const loginRes = await axiosInstance.post('/login', {
                email: data.email,
                password: data.password
            });
            
            localStorage.setItem("token", loginRes.data.token);
            if (loginRes.data.user) {
                localStorage.setItem("user", JSON.stringify(loginRes.data.user));
            }

            alert("Kayıt ve Giriş Başarılı! Yönlendiriliyorsunuz...");
            navigate('/');
        } catch (loginError) {
            console.error("Auto-login hatası:", loginError);
            alert("Hesap oluşturuldu ancak otomatik giriş yapılamadı. Lütfen giriş sayfasına gidiniz.");
            navigate('/login');
        }
      })
      .catch(err => {
        const errorMessage = err.response?.data?.message || err.message || "Bilinmeyen bir hata oluştu";
        alert(`Kayıt Başarısız: ${errorMessage}`);
      });
  };

  const isStore = roles.find(r => String(r.id) === String(selectedRoleId))?.code === 'store';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input
                  {...register("name", { 
                    required: "İsim zorunludur", 
                    minLength: { value: 3, message: "En az 3 karakter olmalı" } 
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input
                  {...register("email", { required: "Email zorunludur" })}
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input
                  {...register("password", { 
                    required: "Şifre zorunludur", 
                    minLength: { value: 6, message: "En az 6 karakter olmalı" }
                  })}
                  type="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1">
                <input
                  {...register("confirmPassword", { 
                    required: "Şifre tekrarı zorunludur",
                    validate: (val) => val === password || "Şifreler eşleşmiyor"
                  })}
                  type="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <div className="mt-1">
                <select
                  {...register("role_id")}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                >
                  {roles.map(role => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {isStore && (
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 space-y-4 animate-fade-in">
                <h3 className="text-lg font-medium text-gray-900">Store Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Store Name</label>
                  <input
                    {...register("store_name", { 
                      required: isStore ? "Mağaza adı zorunlu" : false, 
                      minLength: { value: 3, message: "En az 3 karakter" } 
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                  />
                  {errors.store_name && <p className="text-red-500 text-xs mt-1">{errors.store_name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Store Phone</label>
                  <input
                    {...register("store_phone", { 
                      required: isStore ? "Telefon zorunlu" : false, 
                      pattern: { 
                        value: /^(\+90|0)?5\d{9}$/, 
                        message: "Geçerli bir Türk numarası giriniz" 
                      } 
                    })}
                    placeholder="+905XXXXXXXXX"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                  />
                  {errors.store_phone && <p className="text-red-500 text-xs mt-1">{errors.store_phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Tax ID</label>
                  <input
                    {...register("store_tax_no", { 
                      required: isStore ? "Vergi No zorunlu" : false, 
                      pattern: { 
                        value: /^T\d{4}V\d{6}$/, 
                        message: "Format: TXXXXVXXXXXX" 
                      } 
                    })}
                    placeholder="T1234V123456"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                  />
                  {errors.store_tax_no && <p className="text-red-500 text-xs mt-1">{errors.store_tax_no.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bank Account (IBAN)</label>
                  <input
                    {...register("store_bank_account", { 
                      required: isStore ? "IBAN zorunlu" : false, 
                      pattern: {
                          value: /^TR\d{24}$/,
                          message: "Geçerli bir TR IBAN giriniz"
                      }
                    })}
                    placeholder="TR..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm"
                  />
                  {errors.store_bank_account && <p className="text-red-500 text-xs mt-1">{errors.store_bank_account.message}</p>}
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#23A6F0] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23A6F0] disabled:bg-blue-300"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;