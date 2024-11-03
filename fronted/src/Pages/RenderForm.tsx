import { useForm, Controller } from 'react-hook-form';
import { CountryDropdown } from 'react-country-region-selector';
import { Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from "axios"
import { useParams } from 'react-router-dom';
type FormData = {
    name: string;
    countryCode: string;
    phoneNumber: string;
    formType:string;
};

export function RenderForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const {FormName} =useParams() ;
    const onSubmit = async(Formdata: FormData) => {
        try{
            Formdata.formType=FormName ||"";
            await axios.post('http://localhost:3000/api/forms',{name:Formdata.name,countryCode:Formdata.countryCode,phoneNumber:parseInt(Formdata.phoneNumber),formType:Formdata.formType})
            toast.success('Form submitted successfully!');
        }catch(e){
            toast.error("Internal Server Error")
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>User Information</CardTitle>
                <CardDescription>Please fill in your details</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: 'Name is required',
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: 'Name must contain only alphabetic characters',
                                },
                            }}
                            render={({ field }) => (
                                <Input
                                    id="name"
                                    {...field}
                                    className={errors.name ? 'border-red-500' : ''}
                                />
                            )}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Country Code */}
                    <div className="space-y-2">
                        <Label htmlFor="countryCode">Country Code</Label>
                        <Controller
                            name="countryCode"
                            control={control}
                            rules={{ required: 'Country code is required' }}
                            render={({ field }) => (
                                <CountryDropdown
                                    id="countryCode"
                                    {...field}
                                    classes={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${errors.countryCode ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                            )}
                        />
                        {errors.countryCode && (
                            <p className="text-red-500 text-sm flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.countryCode.message}
                            </p>
                        )}
                    </div>

                    {/* Phone Number Field */}
                    <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            rules={{
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^\d+$/,
                                    message: 'Phone number must be numeric',
                                },
                                validate: () => {
                                    return true;
                                },
                            }}
                            render={({ field }) => (
                                <Input
                                    id="phoneNumber"
                                    type='tel'
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    {...field}
                                    className={errors.phoneNumber ? 'border-red-500' : ''}
                                />
                            )}
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-sm flex items-center">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                {errors.phoneNumber.message}
                            </p>
                        )}
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full" onClick={handleSubmit(onSubmit)}>
                    Submit
                </Button>
            </CardFooter>
            <Toaster position="top-center"/>
        </Card>
    );
}
