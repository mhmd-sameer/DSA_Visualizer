package com.example.dsa.Controller;

import com.example.dsa.Model.AuthRequest;
import com.example.dsa.Model.User;
import com.example.dsa.Service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public void signup(@RequestBody AuthRequest request) {
        authService.signup(request);
    }

    @PostMapping("/login")
    public User login(@RequestBody AuthRequest request) {
        return authService.login(request);
    }
}
