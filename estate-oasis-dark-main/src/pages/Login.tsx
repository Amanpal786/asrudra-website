
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LogIn, User, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    employeeId: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login logic - in real app, authenticate with backend
    setTimeout(() => {
      console.log('Login attempt:', loginForm);
      // For demo purposes, accept any credentials
      if (loginForm.employeeId && loginForm.password) {
        localStorage.setItem('employeeAuth', 'true');
        localStorage.setItem('employeeId', loginForm.employeeId);
        navigate('/employee-dashboard');
      } else {
        alert('Please enter valid credentials');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative py-20 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=1920&h=1080&fit=crop"
            alt="Login Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="glass-effect">
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <LogIn className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">Employee Login</CardTitle>
                <p className="text-muted-foreground">Access your employee dashboard</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="employeeId"
                        value={loginForm.employeeId}
                        onChange={(e) => setLoginForm({...loginForm, employeeId: e.target.value})}
                        placeholder="Enter your employee ID"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        placeholder="Enter your password"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-primary text-primary-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Forgot your password?{' '}
                    <a href="#" className="text-primary hover:underline">
                      Contact IT Support
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
